import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"
import DEFAULT_OPTIONS from "./DefaultOptions"
// import Filters from "./Filters"
import "./imageeditor.css"

const FilterSlider = ({ options, updateFilterOptions, index }) => {
    return (
      <div>
      <div className="p-3 fw-bold radius-curve" style={{background: "#1a3847"}}>
        <label class="form-label text-white" for={options.property}>
          {options.name}
          {"   :   "}
          <span class="form-label-small">{options.value}</span>
        </label>
        <div class="range">
          <input
            onChange={(e) => updateFilterOptions(index, parseInt(e.target.value))}
            value={options.value}
            type="range"
            class="form-range"
            min={options.range.min}
            max={options.range.max}
            id={options.property}
            // style={{backgoundColor: options.backgroundColor}}
          />
        </div>
      </div>
        <hr />
      </div>
    )
  }

const ImageEditor = () => {

    const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [mainImg, setMainImg] = useState(sessionStorage.getItem('mainImg'))
  const [filterName, setFilterName] = useState("")
  const [filterArray, setFilterArray] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let image = sessionStorage.getItem("mainImg")
    if (image) {
      setMainImg(image)
    }

    document.body.addEventListener('drop', (e) => e.preventDefault())
  }, [])

  const updateFilters = (index, val) => {
    let newOptions = [...options]
    newOptions[index]["value"] = val
    setOptions([...newOptions])
  }

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  const getUserFilter = () => {
    setLoading(true)
    fetch("http://localhost:5000/filter/getbyuser/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFilterArray(data)
        setLoading(false)
      })
  }

  const saveCustomFilter = () => {
    console.log(options)

    fetch("http://localhost:5000/filter/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: filterName,
        image: mainImg,
        values: options,
        createdBy: currentUser._id,
        createdAt: new Date(),
      }),
    }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        getUserFilter()
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Filter saved successfully",
        })
      }
    })
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`
    })

    // filters.push(`url(${mainImg})`);
    // console.log({ filter: filters.join(" ") });

    return { filter: filters.join(" "), backgroundImage: `url(${mainImg})` }
  }

  return (
    
      <div className="container-fluid">

        <div className="row">

            <div className="col-md-1">
                <div className="card">
                    <div className="card-header">
                        <h2>Saved Filters</h2>
                    </div>
                    <div className="card-body">
                    


                    </div>
                </div>
                
            </div>

            <div className="col-md-9">
            <div className="card">
                    <div className="card-body">
                    

                        
                    </div>
                </div>
                
            </div>
            <div className="col-md-2">
            <div className="card">
                    <div className="card-body">
                    

                        
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    
  );
};

export default ImageEditor;
