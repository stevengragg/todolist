import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Task(props) {
    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>

    )
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55bcf6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#55bcf6"
    }
})

export default Task;
