import React from 'react';
import RN from '../../components/common/react-native';
import styles from './styles';

function TopBarBtn() {
  return (
    <RN.TouchableOpacity>
      <RN.Image
        source={require('../../assets/defaultUser.jpg')}
        style={styles.userImg}
      />
    </RN.TouchableOpacity>
  );
}

export default TopBarBtn;
