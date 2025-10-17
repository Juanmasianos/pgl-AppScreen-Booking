import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import { footerItems } from '../../data/FooterItems'
import { FooterItem } from '../../types/FooterItem'
import FooterButton from './FooterButton'

const Footer = () => {
  return (
    <View style={styles.footer}>
      {
        footerItems.map((item: FooterItem) => 
          <FooterButton
                  key={item.key} 
                  icon={item.icon}
                  picture={item.picture}
                  title={item.title}
          />
        )
      }
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({  
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,

    flexDirection: 'row',
    flexWrap: 'nowrap'
  },

})