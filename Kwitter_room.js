user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name")
firebase.database().ref(room_name).push({
    name:user_name,
  message:msg,
  like:0  
})