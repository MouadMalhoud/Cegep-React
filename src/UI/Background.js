import './Background.css'


function Background(props){
    return <div className='backdrop' onClick={props.onClick}></div>
}
export default Background;