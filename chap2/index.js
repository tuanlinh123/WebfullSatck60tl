let inputName = document.getElementById("input"),
  submit = document.getElementById("submit"),
  uotPut = document.getElementById("result");

const handlesubmit = async (e) => {
  let ky = inputName.value.trim();
  console.log(ky);
  let data = await fetch(`https://api.github.com/users/${ky}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err)=>err);
 
 if(data.message) {
    alert('người này không tồn tại')
    uotPut.innerHTML = 'mời bạn nhập lại'
 }  else(
    uotPut.innerHTML = `
    <li>name : ${data.name}</li>
    <li>
       <img src=${data.avatar_url}>
    </li>
    <li>
        email : ${data.email} 
    </li>
    <li>
        cty : ${data.company}
    </li>
    <li>
        follower : ${data.followers} 
    </li>
    `
) 
};
