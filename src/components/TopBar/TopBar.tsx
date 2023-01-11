import React from 'react';
import RN from '../../components/common/react-native';
import styles from './styles';

interface screenName {
  screenName: string;
  children?: any;
}

function TopBar({screenName, children}: screenName) {
  return (
    <RN.View style={styles.topBar}>
      <RN.Text style={styles.screenName}>{screenName}</RN.Text>
      <RN.View style={styles.topBarRight}>{children}</RN.View>
    </RN.View>
  );
}

export default TopBar;
