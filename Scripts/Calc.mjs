export class Calculator {
  constructor(InputusersNumber, InputbathTime, InputBathperUser, exit) {
    this.inputs = [
      (this.InputusersNumber = InputusersNumber),
      (this.InputBathperUser = InputBathperUser),
      (this.InputbathTime = InputbathTime)
    ];
    document.getElementById("submit").onclick = ()=> {this.Result()}
    this.exit = exit;
  }

  setVars() {
    this.usersNumber = this.InputusersNumber.value;
    this.bathTime = this.InputbathTime.value;
    this.BathperUser = this.InputBathperUser.value;
  }
  Result() {
    this.setVars();
    const waterUsage = 16.5;
    let result =
      this.usersNumber * this.BathperUser * this.bathTime * waterUsage;
    this.exit.innerText = result + "l";
    this.ResetInputs()
  }
  ResetInputs(){
    this.inputs.map((x)=>{
        x.value = null
    })
  }
}
