import React from 'react'
import {
  View,
  Text,
} from 'react-native'

const Loading = () => {
  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: 'normal',
          fontFamily: 'Helvetica Neue',
        }}>
        Loading...
      </Text>
    </View>
  )
}

Loading.propTypes = {}
Loading.defaultProps = {}

export default Loading