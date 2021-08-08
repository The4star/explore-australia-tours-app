import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import styles from './AudioPlayer.styles';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../constants/colors';

interface IAudioPlayerProps {
  audioSource: string;
}

const AudioPlayer = ({ audioSource }: IAudioPlayerProps) => {
  const [loadingAudio, setLoadingAudio] = useState<boolean>(false);
  const [loadedSound, setSound] = useState<Audio.Sound | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [audioStatus, setAudioStatus] = useState<{ duration: number, currentPosition: number }>({
    duration: 0,
    currentPosition: 0
  })
  let TouchableComponent: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  const playAudio = async () => {
    if (loadedSound) {
      await loadedSound?.playAsync();
    }
    return
  }

  const pauseAudio = async () => {
    await loadedSound?.pauseAsync()
  }

  const fastForwardAudio = async () => {
    const fastForwardMillis = 5000
    if (loadedSound) {
      if (audioStatus.currentPosition + fastForwardMillis < audioStatus.duration) {
        await loadedSound?.setPositionAsync(audioStatus.currentPosition + fastForwardMillis)
      } else {
        await loadedSound?.setPositionAsync(audioStatus.duration)
      }
    }
  }

  const rewindAudio = async () => {
    const rewindMillis = 5000
    if (loadedSound) {
      if (audioStatus.currentPosition - rewindMillis > 0) {
        await loadedSound?.setPositionAsync(audioStatus.currentPosition - rewindMillis)
      } else {
        await loadedSound?.setPositionAsync(0)
      }
    }

  }

  const playbackStatus = useCallback((status: any) => {
    if (status.isLoaded) {
      setAudioStatus({
        duration: status.durationMillis,
        currentPosition: status.positionMillis
      })
      if (status.isPlaying !== playing) {
        setPlaying(status.isPlaying)
      }
      if (status.didJustFinish) {
        loadedSound?.setPositionAsync(0)
      }
    }
  }, [loadedSound, playing, audioStatus])

  const getPosition = () => {
    const position = audioStatus.duration !== 0 ? (audioStatus.currentPosition / audioStatus.duration * 100).toFixed(0) : 0
    return {
      width: `${position}%`
    }
  }

  const formatTime = (time: number) => {
    var minutes = Math.floor(time / 60000);
    var seconds = parseInt(((time % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  useEffect(() => {
    // load sound straight away
    const loadSound = async () => {
      setLoadingAudio(true)
      const { sound } = await Audio.Sound.createAsync({ uri: audioSource });
      setSound(sound);
      setLoadingAudio(false)
    }
    loadSound()
  }, [])

  useEffect(() => {
    if (loadedSound) {
      loadedSound.setOnPlaybackStatusUpdate(playbackStatus)
    }
  }, [loadedSound, playing])

  useEffect(() => {
    // unload sound when user leaves screen.
    return loadedSound
      ? () => {
        loadedSound.unloadAsync();
      }
      : undefined;
  }, [loadedSound]);


  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TouchableComponent onPress={() => rewindAudio()} >
          <View style={styles.button}>
            <FontAwesome name="backward" size={50} color={colors.green} />
          </View>
        </TouchableComponent>
        <TouchableComponent onPress={() => playing ? pauseAudio() : playAudio()}>
          <View style={styles.playButton}>
            <FontAwesome name={playing ? "pause" : "play"} size={50} color={colors.green} style={{ marginLeft: playing ? 1 : 11 }} />
          </View>
        </TouchableComponent>
        <TouchableComponent onPress={() => fastForwardAudio()}>
          <View style={styles.button}>
            <FontAwesome name="forward" size={50} color={colors.green} />
          </View>
        </TouchableComponent>
      </View>
      <View style={styles.statusBar}>
        <View style={{ ...styles.position, ...getPosition() }} />
      </View>
      <View style={styles.time} >
        {
          loadingAudio ?
            <ActivityIndicator size="small" color={colors.purple} />
            :
            <Text style={styles.timeText}>{formatTime(audioStatus.currentPosition)} / {formatTime(audioStatus.duration)}</Text>
        }
      </View>
    </View >
  )
}

export default AudioPlayer
