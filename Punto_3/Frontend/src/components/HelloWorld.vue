<template>
  <div id="app">
      <h1>Prueba tecnica - Andina de Seguridad del Valle LTDA</h1>
      <h2>Ingrese numero de tarjeta</h2>
      
      <input type="number" placeholder="Escriba numero de la tarjetas" v-model="mensaje">
      
      <button @click="registrar">Registar</button>
      
      <h3>Valor de billete</h3>
      <div id="valor_billete"></div>
      
      <br>
      
      <table class="table" style="margin: auto;">
        <thead style="text-align: center;">
          <tr>
            <th scope="col">Nro de tarjeta</th>
            <th scope="col">Valor</th>
            <th scope="col">Ultimo acceso</th>
            <th scope="col">Ultimo valor pagado</th>
            <th scope="col">Estación</th>
            <th scope="col">Torno</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><div id="resultado1"></div></th>
            <td><div id="resultado2"></div></td>
            <td><div id="resultado3"></div></td>
            <td><div id="resultado4"></div></td>
            <td><div id="resultado5"></div></td>
            <td><div id="resultado6"></div></td>
          </tr>
        </tbody>
      </table>
      
      <h2>Usuarios activos</h2>
      
      <table class="table" style="margin: auto">
        <thead style="text-align: center;">
          <tr>
            <th scope="col">Nro de tarjeta</th>
            <th scope="col">Valor</th>
            <th scope="col">Ultimo acceso</th>
            <th scope="col">Ultimo valor pagado</th>
            <th scope="col">Estación</th>
            <th scope="col">Torno</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.nro_tarjeta">
            <td>{{todo.nro_tarjeta}}</td>
            <td>{{todo.valor}}</td>
            <td>{{todo.ultimo_acceso}}</td>
            <td>{{todo.ultimo_valor_pagado}}</td>
            <td>{{todo.estacion}}</td>
            <td>{{todo.torno}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  var n_tarjeta = 0;
  var n_valor = 0;
  var n_acceso, n_pagado, n_estacion, n_torno;
  var valor_billete = 1500;
  var pos;
  
  import axios from 'axios'
  export default {
    name: 'App',
    
    data(){
      return {
        todos: null,
        mensaje: 0
      }
    },
    
    mounted(){
      this.getTodos();
    },
    
    methods: {
      calculate(){
        return this.z * 2;
      },
        
      getTodos(){
        axios
          .get('http://localhost:3000/users')
          .then( response => {
              console.log(response)
                this.todos = response.data
            })
          .catch(e => console.log(e))
      },

      registrar(){
        const a = this.todos.length;
        const c = this.mensaje;
        
        for(let i=0;i<a;++i){
          
          if(c == this.todos[i].nro_tarjeta){
            
            pos = i;
            
            n_tarjeta = this.todos[pos].nro_tarjeta;
            n_valor = this.todos[pos].valor;
            n_acceso = this.todos[pos].ultimo_acceso;
            n_pagado = this.todos[pos].ultimo_valor_pagado;
            n_estacion = this.todos[pos].estacion;
            n_torno = this.todos[pos].torno;
            
            document.getElementById('resultado1').innerHTML = n_tarjeta;
            document.getElementById('resultado2').innerHTML = n_valor;
            document.getElementById('resultado3').innerHTML = n_acceso;
            document.getElementById('resultado4').innerHTML = n_pagado;
            document.getElementById('resultado5').innerHTML = n_estacion;
            document.getElementById('resultado6').innerHTML = n_torno;
            document.getElementById('valor_billete').innerHTML = valor_billete;
            
            console.log('Numero tarjeta');
            console.log(this.todos[pos].nro_tarjeta);

            if(this.todos[pos].valor > valor_billete){
              
              var cobro = n_valor - valor_billete;
              var m = 'http://localhost:3000/users/';
              var b = new URL(m);
              var d = new URL(n_tarjeta, b);
              
              console.log('Cobro');
              console.log(cobro);
              
              axios.put(d,
                {
                  "valor": cobro
                }
              );
            } else{
              alert('Recuerde recargar tarjeta');
            }
          }
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
