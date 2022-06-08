import React, { useState, useCallback } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
} from "react-native";
import AccordionListItem from "./Accordion";
import styles from "../styles/perfil";

// const postagens = [];

const Perfil = () => {
  return (
    <View style={styles.telaPerfil}>
      <View style={styles.container}>
        <Image
          source={require("../assets/usuarioPerfil.png")}
          style={styles.imagemUsuario}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Email"}
          keyboardType={"default"}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Nome"}
          keyboardType={"default"}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Senha"}
          keyboardType={"default"}
        />
      </View>

      <View style={styles.selectField}>
        <View style={styles.containerChildren}>
          <AccordionListItem title={"Suas postagens"}>
            <Text>post</Text>
          </AccordionListItem>
        </View>
      </View>

      <View style={styles.buttonField}>
        <TouchableOpacity style={styles.buttonPerfilEditar}>
          <Text style={styles.textButtonEditar}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPerfilDeletar}>
          <Text style={styles.textButtonDeletar}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Perfil;
