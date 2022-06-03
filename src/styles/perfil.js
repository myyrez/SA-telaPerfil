import { StyleSheet } from "react-native";

export default StyleSheet.create({
  telaPerfil: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    height: "45%",
    backgroundColor: "#dadfe5",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
  },
  imagemUsuario: {
    height: 100,
    width: 100,
    marginBottom: 10
  },
  inputField: {
    width: '80%',
    height: 50,
    borderRadius: 8,
    padding: 15,
    margin: 5,
    fontSize: 18,
    color: "#000",
    backgroundColor: "#fff",
    borderColor: "#ced4da",
    borderWidth: 1
  },
  buttonField: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPerfilEditar: {
    width: "40%",
    height: 50,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: "#5772e9",
    backgroundColor: "#5772e9",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPerfilDeletar: {
    width: "40%",
    height: 50,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: "#5772e9",
    backgroundColor: "#5772e9",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonEditar: {
    fontSize: 20,
    color: "#fff",
  },
  textButtonDeletar: {
    fontSize: 20,
    color: "#fff",
  },
  selectField: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: '50%',
    elevation: 999,
    // maxHeight: '25%'
  }
});
