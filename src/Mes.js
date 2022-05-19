import './Mes.css';

function Mes({mess}){
    return (
        <div className='produto__container '>
            {
mess.map((mes) => (
    <p>{mes}</p>
))}
        </div>
    );
}


export default Mes;