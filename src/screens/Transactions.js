import React, {Component} from 'react'
import {inject, observer} from 'mobx-react/native'
import {isEmpty} from 'lodash';
import {View, Text, ScrollView} from 'react-native';

import TransactionItem from '../components/TransactionItem';
import profileStyle from '../styles/profileStyle';

const HomeScreen = ({account}) => {
  const {transactions} = account;

  return (
    <ScrollView>
      <View style={profileStyle.containerTrans}>
        {!isEmpty(transactions) ? transactions.map((t, id) => <TransactionItem key={id} text={t} />) : <TransactionItem text={'Er zijn nog geen transacties gebeurd'} />}
      </View>
    </ScrollView>
  );
}

export default inject(
  ({store}) => ({
    account: store.account
  })
)(
  observer(HomeScreen)
);
