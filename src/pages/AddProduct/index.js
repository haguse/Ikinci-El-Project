import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Container,
  Detail,
  AddFile,
  Line,
  Button,
} from "./ScAddProduct";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../actions/categoriesActions";
import { getAllBrands } from "../../actions/brandsActions";
import { getAllColors } from "../../actions/colorsActions";
import { getAllStatus } from "../../actions/statusActions";
import { addProduct } from "../../actions/productsActions";
import { history } from "../../_helpers/history";
import { ACCESS_TOKEN_NAME } from "../../api";
import Switch from "react-switch";
import ProgressBar from "../../components/AddProduct/ProgressBar";
import DragImage from "../../components/AddProduct/DragImage";
import Select from "react-select";

const AddProduct = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);
  if (!token) history.push("sign-in");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBrands());
    dispatch(getAllColors());
    dispatch(getAllStatus());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brands);
  const colors = useSelector((state) => state.colors);
  const status = useSelector((state) => state.status);
  const imageUrl = useSelector((state) => state.file.imageUrl);

  // States for selects
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const [showProgress, setShowProgress] = useState(false);

  // Upload Image
  // useEffect(() => {
  //   const fd = new FormData();
  //   if (newProductImage !== null) {
  //     fd.append("file", newProductImage);
  //     dispatch(uploadFile(fd));
  //     setShowProgress(true);
  //     console.log(fd);
  //   }
  // }, [newProductImage, dispatch]);

  const [newProduct, setNewProduct] = useState({
    price: 0,
    imageUrl: "",
    title: "",
    status: {
      title: "",
      id: "",
    },
    color: {
      title: "",
      id: "",
    },
    brand: {
      title: "",
      id: "",
    },
    category: {
      title: "",
      id: "",
    },
    description: "",
    isOfferable: false,
  });

  // New Brand Name, Description, Price Assignments
  const handleInput = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setNewProduct({
      ...newProduct,
      category: {
        id: category.value,
        title: category.label,
      },
    });
  };

  const handleBrand = (brand) => {
    setSelectedBrand(brand);
    setNewProduct({
      ...newProduct,
      brand: {
        id: brand.value,
        title: brand.label,
      },
    });
  };

  const handleColor = (color) => {
    setSelectedColor(color);
    setNewProduct({
      ...newProduct,
      color: {
        id: color.value,
        title: color.label,
      },
    });
  };

  const handleStatus = (status) => {
    setSelectedStatus(status);
    setNewProduct({
      ...newProduct,
      status: {
        id: status.value,
        title: status.label,
      },
    });
  };

  const handleIsOfferable = (nextState) => {
    setNewProduct({
      ...newProduct,
      isOfferable: nextState,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
    if (newProduct.imageUrl !== "") {
      dispatch(addProduct(newProduct));
    }
  };

  // Set Product Image Url
  useEffect(() => {
    setNewProduct({ ...newProduct, imageUrl: imageUrl.url });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl]);

  let categorySelect = categories.categoriesData.map((category) => {
    return { value: category.id, label: category.title };
  });

  let brandsSelect = brands.brandsData.map((brand) => {
    return { value: brand.id, label: brand.title };
  });

  let colorsSelect = colors.colorsData.map((color) => {
    return { value: color.id, label: color.title };
  });

  let statusSelect = status.statusData.map((status) => {
    return { value: status.id, label: status.title };
  });

  return (
    <Container>
      <Wrapper>
        <Detail>
          <p>Ürün Detayları</p>
          <form>
            <label htmlFor="">Ürün Adı</label>
            <input
              className="product__name"
              type="text"
              placeholder="Örnek: iPhone 12 Pro Max"
              name="title"
              onChange={handleInput}
            />
            <label htmlFor="">Açıklama</label>
            <textarea
              className="product__desc"
              id=""
              cols="30"
              rows="4"
              placeholder="Ürün açıklamasını girin"
              name="description"
              onChange={handleInput}
            ></textarea>
            <div className="selects">
              <div className="select">
                <label htmlFor="">Kategori</label>
                <div className="react-select">
                  <Select
                    value={selectedCategory}
                    onChange={handleCategory}
                    options={categorySelect}
                    placeholder="Kategori seç"
                  />
                </div>
              </div>
              <div className="select">
                <label htmlFor="">Marka</label>
                <div className="react-select">
                  <Select
                    value={selectedBrand}
                    onChange={handleBrand}
                    options={brandsSelect}
                    placeholder="Marka seç"
                  />
                </div>
              </div>
            </div>
            <div className="selects">
              <div className="select">
                <label htmlFor="">Renk</label>
                <div className="react-select">
                  <Select
                    value={selectedColor}
                    onChange={handleColor}
                    options={colorsSelect}
                    placeholder="Renk seç"
                  />
                </div>
              </div>
              <div className="select">
                <label htmlFor="">Kullanım Durumu</label>
                <div className="react-select">
                  <Select
                    value={selectedStatus}
                    onChange={handleStatus}
                    options={statusSelect}
                    placeholder="Kullanım durumu seç"
                  />
                </div>
              </div>
            </div>
            <label htmlFor="">Fiyat</label>
            <input
              className="price"
              type="text"
              name="price"
              id=""
              placeholder="TL"
              onChange={handleInput}
            />
            <div className="toggle-switch">
              <span>Teklif opsiyonu</span>
              <Switch
                onChange={handleIsOfferable}
                checked={newProduct.isOfferable}
                onColor="#4B9CE2"
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </div>
          </form>
        </Detail>
        <Line />
        <AddFile>
          <div className="add-file">
            <p className="title">Ürün Görseli</p>
            {showProgress ? (
              <ProgressBar />
            ) : (
              <div className="add-file__wrapper">
                <DragImage showProgress={() => setShowProgress(true)}>
                  {/* <img src={AddFileIcon} alt="Add File" />
                  <div className="add-file__wrapper__text">
                    <p>Sürükleyip bırakarak yükle</p>
                    <p>veya</p>
                  </div>
                  <label htmlFor="file-upload">
                    <span>Görsel Seçin</span>
                  </label> */}
                </DragImage>
                <input
                  type="file"
                  id="file-upload"
                  // onChange={(e) => setNewProductImage(e.target.files[0])}
                />
                <p className="add-file__wrapper__size">
                  PNG ve JPEG Dosya boyutu max. 100kb
                </p>
              </div>
            )}
          </div>
          <Button onClick={handleSubmit} type="submit">
            Kaydet
          </Button>
        </AddFile>
      </Wrapper>
    </Container>
  );
};

export default AddProduct;
