<template>
    <main>
        <div class="container">
            <div class="title">
                <h1>Recuperar Senha</h1>
                
                <form class="LoginData">
                    <label>Digite seu e-mail</label>
                    <input type="text" id="emailLogin" name="emailLogin" placeholder="E-mail" />
                   
                </form>
                <div class="confirm">
                    <button class="designBotao" @click="showPopup">Recuperar</button>
                </div>
            </div>
        </div>
        <div class="popup" v-bind:class="{ 'active': showPopupFlag }">
            <p>E-mail de recuperação enviado</p>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            showPopupFlag: false
        };
    },
    methods: {
        showPopup() {
            this.showPopupFlag = true;
            
            
            setTimeout(() => {
                this.showPopupFlag = false;
            }, 3000); 
        }
    }
};
</script>
<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  background-color: #F5F5F5;
  border-radius: 10px;
  color: black;
  padding: 2rem;
  width: 23rem;
  margin: 3% auto;
  max-width: 37.5rem;
  min-height: auto;
  overflow: auto;
}

.alto-contraste .container {
  background-color: hsl(0, 0%, 15%);
  color: white;
}

.title {
  width: 100%;
}

.title h1 {
  text-align: left;
}

.LoginData {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.LoginData input {
  width: 100%; 
  max-width: 20rem;
}

.linksContainer {
  display: flex;
  justify-content: space-between;
}


.confirm {
  padding-top: 1em;
  display: flex;
  justify-content: center;
  width: 100%;
}

.designBotao { 
  background-color: #55AE4D;
  padding: 10px 114px; 
  color: black;
  font-weight: 400;
  text-decoration: none; 
  transition: all 0.3s ease;
  border-radius: 10px;
}

.designBotao:hover {
  background-color: #093d0c;
  color: #F5F5F5;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.designBotao:active {
  transform: scale(0.98); 
}
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 1rem;
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.popup.active {
    opacity: 1;
    visibility: visible;
}

/* Apply responsive styles for smaller screens */
@media screen and (max-width: 48rem) {
  .container {
    max-width: 90%;
  }
}
</style>
