
export default function CoreConcept({title, description, img}){
  return (
    <li>
      <img src={img} alt="..."/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}