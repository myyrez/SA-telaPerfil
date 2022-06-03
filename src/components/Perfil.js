import React, { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import SelectBox from "react-native-multi-selectbox";
import styles from "../styles/perfil";
import { xorBy } from "lodash";

const postagens = [
  {
    item: "Juventus",
    id: "JUVE",
  },
  {
    item: "Real Madrid",
    id: "RM",
  },
  {
    item: "Barcelona",
    id: "BR",
  },
  {
    item: "PSG",
    id: "PSG",
  },
  {
    item: "FC Bayern Munich",
    id: "FBM",
  },
  {
    item: "Manchester United FC",
    id: "MUN",
  },
  {
    item: "Manchester City FC",
    id: "MCI",
  },
];

const Perfil = () => {
  const [postagensSelecionadas, setPostagensSelecionadas] = useState([]);
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
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            backgroundColor: "#5772e9",
            borderRadius: 10,
            color: "#fff",
          }}
        >
          Suas postagens
        </Text>
        <SelectBox
          label=""
          inputPlaceholder="pesquisar"
          width="150%"
          arrowIconColor="#0047e9"
          searchIconColor="#0047e9"
          toggleIconColor="#0047e9"
          backgroundColor="#fff"
          options={postagens}
          selectedValues={postagensSelecionadas}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
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
  function onMultiChange() {
    return (item) =>
      setPostagensSelecionadas(xorBy(postagensSelecionadas, [item], "id"));
  }
};
export default Perfil;
