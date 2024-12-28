import { BRAND } from "../../constants/branding"



const Logo = () => {
  return (
      <div className="flex items-center space-x-3">
          <div>
              <h1 className="text-2xl font-bold text-white">{ BRAND.name }</h1>
          </div>
    </div>
  )
}

export default Logo