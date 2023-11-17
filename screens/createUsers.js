import { useState } from "react";
import React  from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable } from "react-native"


// const CreateUsers = () => { ahora hare otra forma de crearlo para renderizar el componente
function CreateUsers() {

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
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.vistasInput}>
                    <TextInput placeholder="Nombre Usuario" onChangeText={(value) => handleChangeText("nombre", value)} />
                </View>
                <View style={styles.vistasInput}>
                    <TextInput placeholder="Ministerio " onChangeText={(value) => handleChangeText("ministerio", value)}  />
                </View>
                <View style={styles.vistasInput}>
                    <TextInput placeholder="Correo Electronico" onChangeText={(value) => handleChangeText("email", value)}  />
                </View>
                <View style={styles.btn} >
                    <Pressable   onPress={() => console.log(state)}>
                        <Text>
                            Crear Usuario
                        </Text>
                    </Pressable>
                </View>
                <Text style={styles.textofooter}>Desarrollado por mcid</Text>   
            </View>
            
        </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    container:{

        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "white", //"#40E0D0",
        width: "100%",
        height: "100%",
       
    },

    vistasInput: {
        // flex: 1,
        margin: 5,
        borderRadius: 25,
        borderColor: "#1E7DB2",
        borderWidth: 0.5,
        padding: 5,
        paddingLeft: 10,
        width: "95%"
        
        
    },
   
    btn: {
        flex:1,
        justifyContent: 'center', // For aligning vertically
        alignItems: "center",
        backgroundColor: "#CFD60D",
        borderRadius: 25,
        width: 150,
        padding: 5,
        marginTop: 25,
        marginBottom: 10,
        marginHorizontal: "auto",
        borderColor: "#C8CD22",
        borderWidth: 3,
        
    },
    
    textofooter: {
        color:"#DAF7A6",
        marginTop: "20%",
        
    }
   
})

  export default CreateUsers;