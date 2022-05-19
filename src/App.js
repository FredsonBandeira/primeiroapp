
import './App.css';
import Mes from './Mes'

function App(props) {
  const mesArray=['janeiro','Fevereiro','Marco','jan','mmm'];
  return (
    <div className="App">
       <Mes mess={mesArray}/>
    </div>
  )
}

export default App;
/**
 * var vencedores = [
    {
        nome : "Equipe Super",
        pais : "Brasil"
    },
    {
        nome : "Time Maximo",
        pais : "EUA"
    },
    {
        nome : "Mega Grupo",
        pais : "Canadá"
    }
];

var podioPorPais = vencedores.map(function(item, indice){     
     var x = new Boolean(true);
     
		if (x ==(item.pais=='EUA')) {
       return item.nome;
		}

     
    
});

document.write(podioPorPais);
 */
