import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
  Alert,
  Share,
  Platform,
} from 'react-native';

let facebookParameters = '';
let TwitterParameters = '';

// Whatsapp Brand Resources forcing to use ios icon for only ios so we heft to use different logos for be legal.
const WhatsappShareIcon = () => {
  if (Platform.OS == 'ios') {
    return (
      <Image
        style={{width: 40, height: 40, alignSelf: 'center', marginBottom: 5}}
        source={require('../../../assets/whatsapp-ios.png')}
      />
    );
  } else if (Platform.OS == 'android') {
    return (
      <Image
        style={{width: 40, height: 40, alignSelf: 'center', marginBottom: 5}}
        source={require('../../../assets/whatsapp-android.png')}
      />
    );
  }
};

export default class BoxedShare extends Component {
  componentDidMount() {
    // Check which props given and create url query
    if (this.props.FacebookShareURL != undefined) {
      if (facebookParameters.includes('?') == false) {
        facebookParameters =
          facebookParameters + '?u=' + encodeURI(this.props.FacebookShareURL);
      } else {
        facebookParameters =
          facebookParameters + '&u=' + encodeURI(this.props.FacebookShareURL);
      }
    }
    if (this.props.FacebookShareMessage != undefined) {
      if (facebookParameters.includes('?') == false) {
        facebookParameters =
          facebookParameters +
          '?quote=' +
          encodeURI(this.props.FacebookShareMessage);
      } else {
        facebookParameters =
          facebookParameters +
          '&quote=' +
          encodeURI(this.props.FacebookShareMessage);
      }
    }
    if (this.props.TwitterShareURL != undefined) {
      if (TwitterParameters.includes('?') == false) {
        TwitterParameters =
          TwitterParameters + '?url=' + encodeURI(this.props.TwitterShareURL);
      } else {
        TwitterParameters =
          TwitterParameters + '&url=' + encodeURI(this.props.TwitterShareURL);
      }
    }
    if (this.props.TwitterShareMessage != undefined) {
      if (TwitterParameters.includes('?') == false) {
        TwitterParameters =
          TwitterParameters +
          '?text=' +
          encodeURI(this.props.TwitterShareMessage);
      } else {
        TwitterParameters =
          TwitterParameters +
          '&text=' +
          encodeURI(this.props.TwitterShareMessage);
      }
    }
    if (this.props.TwitterViaAccount != undefined) {
      if (TwitterParameters.includes('?') == false) {
        TwitterParameters =
          TwitterParameters + '?via=' + encodeURI(this.props.TwitterViaAccount);
      } else {
        TwitterParameters =
          TwitterParameters + '&via=' + encodeURI(this.props.TwitterViaAccount);
      }
    }
  }
  render() {
    return (
      <View style={styles.ShareArea}>
        <View style={styles.ShareItems}>
          <TouchableOpacity
            onPress={() => {
              Share.share({
                message:
                  this.props.NativeShareMessage != undefined
                    ? this.props.NativeShareMessage
                    : null,
                url:
                  this.props.NativeShareURL != undefined
                    ? this.props.NativeShareURL
                    : null, //only for ios
                title:
                  this.props.NativeShareTitle != undefined
                    ? this.props.NativeShareTitle
                    : null,
              });
            }}>
            <Image
              source={require('../../../assets/share.png')}
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                marginBottom: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  ShareArea: {
    backgroundColor: 'transparent',
    width: screenWidth - 20,
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ShareTitle: {
    fontSize: 20,
  },
  ShareItems: {
    width: 70,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
    marginRight: 7,
  },
});
