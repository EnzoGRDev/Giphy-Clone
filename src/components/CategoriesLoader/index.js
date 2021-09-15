import ContentLoader from "react-content-loader"
export default function CategoriesLoader(props){
  return(
    <ContentLoader
      height={20}
      width={100}
      speed={2}
      backgroundColor="#d756ff"
      foregroundColor="#710094"
      {...props}
    >
      <rect x="0" y="0" rx="3" ry="3" width={Math.floor(Math.random(80)* (100-60) + 60)} height="8" />
    </ContentLoader>
  )
}