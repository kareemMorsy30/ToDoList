import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SectionTab = ({ status, changeStatus }) => {
    return (
        <View style={styles.form}>
            <TouchableOpacity onPress={() => changeStatus("all")}>
            <Text style={[styles.buttons, {backgroundColor: status == "all"? 'orange':'white'}]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeStatus("active")}>
            <Text style={[styles.buttons, {backgroundColor: status == "active"? 'orange':'white'}]}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeStatus("done")}>
            <Text style={[styles.buttons, {backgroundColor: status == "done"? 'orange':'white'}]}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
      height: 30,
      width: 70,
      borderRadius: 40,
      backgroundColor: 'white',
      marginTop: 20,
      margin: 10,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    form: {
      flexDirection: 'row',
    }
});

export default SectionTab;