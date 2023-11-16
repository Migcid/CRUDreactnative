import { useState } from "react";
import React  from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native"


// const CreateUsers = () => { ahora hare otra forma de crearlo para renderizar el componente
function createUsers() {

    //  creamos un estado con useState para poder actualizar y guardar los datos ingrresados en el formulario
    const [state, setState] = useState({
        nombre:"",
        ministerio:"",
        email:""
    })

const handleChangeText = (nombre, value) => {
    setState({...state, [nombre]: value})
}
    return (
        <ScrollView style={styles.container}>
            <View style={styles.vistasInput}>
                <TextInput placeholder="Nombre Usuario" onChangeText={(value) => handleChangeText("nombre", value)} />
            </View>
            <View style={styles.vistasInput}>
                <TextInput placeholder="Ministerio " onChangeText={(value) => handleChangeText("ministerio", value)}  />
            </View>
            <View style={styles.vistasInput}>
                <TextInput placeholder="Correo Electronico" onChangeText={(value) => handleChangeText("email", value)}  />
            </View>
            <View>
                <Button style={styles.btn} title="Crear Usuario" onPress={() => console.log(state)}/>
            </View>
            
        </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
    },

    vistasInput: {
        flex: 1,
        margin: 5,
        borderRadius: 25,
        borderColor: "#1E7DB2",
        borderWidth: 0.5,
        padding: 5,
        paddingLeft: 10,
        
    },
   
    btn: {
        backgroundColor: "#CFD60D",
        borderRadius: 25,
    },
   /* Button:hover: {
        backgroudColor: "white",
    }*/
}
)

  export default createUsers;