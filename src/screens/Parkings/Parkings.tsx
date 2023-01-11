import React from 'react';
import RN from '../../components/common/react-native';
import styles from './styles';
import TopBar from '../../components/TopBar/TopBar';

function Parkings() {
  const [text, setText] = React.useState('');

  const findStore = (text: string) => {
    setText(text);
  };

  return (
    <RN.ScrollView contentContainerStyle={{paddingBottom: 55}}>
      <TopBar screenName={'Parkings'} />

      <RN.View style={styles.searchBox}>
        <RN.View style={styles.searchDiv}>
          <RN.Image
            source={require('../../assets/searchIcon.png')}
            style={styles.searchIcon}
          />
          <RN.TextInput
            style={styles.searchInput}
            value={text}
            onChangeText={findStore}
            placeholder={'Search parkings'}
          />
        </RN.View>
      </RN.View>

      <RN.View style={styles.map}>
        <RN.Text>Map</RN.Text>
      </RN.View>
    </RN.ScrollView>
  );
}

export default Parkings;
