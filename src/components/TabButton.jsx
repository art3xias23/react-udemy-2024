export default function TabButton({children, onSelect, isSelected}){
    return <i><button
    className={isSelected ? 'active' : undefined}
     onClick={onSelect}>{children}</button></i>
}