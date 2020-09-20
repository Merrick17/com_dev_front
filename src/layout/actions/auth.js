import axios from "axios";
import {getAllUsers,getUser} from '../actions/users'; 
import Swal from 'sweetalert2'
export const authUser = (email, password, history) => async (dispatch) => { // dispatch permet d'executer la fonction de modification selectioner par 
  try {                                                                     // le type en reducer approprié 
    let response = await axios.post("http://localhost:3000/users/login", {
      email: email,
      password: password,
    });
    let data = response.data;
    console.log(data);
    if (data.auth == true) {//vérifier si l'utilisateur est connecte sur votre session actuelle
      localStorage.setItem("token", data.token);
      localStorage.setItem("id",data.user._id); 
      let newData = {//charger le data avec les attribut suivant
        email: data.user.email,
        data :data.user._id,
        firstName: data.user.firstName,
        name: data.user.name,
        role:data.user.role._id,
        
        auth: true,
      };
      dispatch({//dispatch ralencer les action 
        //auth_use est un clé qui permet de verifier si l'utilisateur est connectée ou pas et retourner leur data
        type: "AUTH_USER",
        data: newData,
      });
      dispatch(getAllUsers()); //retiurner tous les utilisateur 
     console.log("Dataaa",data.user.role.role) 
      if (data.user.role.role.toLowerCase() == ("admin").toLowerCase())
      {//si l'utilisateur est un salarier ouvrir leur session
      
      history.replace("/admin");
      
      }else
      {
        history.replace("/Userprofile");
       
         /// page acceuil utilisateur simple 
      }
     
    } else {
      Swal.fire({//est une message flash cad controlle de siasiir
        title: 'Error!',
        text: 'Email ou mot de passe incorret',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      dispatch({
        type: "AUTH_USER",
        data: {
          id:"",
          email: "",
          firstName: "",
          name: "",
          role:"",
        
          phone: 0,
          auth: false,
        },
      });
    }
    //history.push("/admin");
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => {//sortie lors 'application
  localStorage.clear();
  return {
    type: "LOGOUT_USER",
    data: {
      email: "",
      firstName: "",
      name: "",
      role:"",
      auth: false,
    },
  };
};
