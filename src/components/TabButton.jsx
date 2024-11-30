export default function TabButton({children, onSelect}){
    return <i><button onClick={onSelect}>{children}</button></i>
}