import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { allproducts } from '../services/allApis';
import { BASE_URL } from '../services/baseurl';
import { useNavigate } from 'react-router-dom';
import { addwishs, addcart } from '../services/allApis';
import { Link } from 'react-router-dom';

function Pcard() {
  const [prod, setProd] = useState([]);
  const [wish, setWish] = useState();
  const navigate = useNavigate();

  const getprod = async () => {
    const result = await allproducts();
    console.log(result);
    setProd(result.data);
  };

  const userr = () => {
    if (localStorage.getItem('currentUser')) {
      const uid = JSON.parse(localStorage.getItem('currentUser'));
      setWish({ ...wish, uid });
    }
  };

  const storep = async (id) => {
    sessionStorage.setItem('id', id);
    navigate('/pview');
  };

  const addtocart = async (item) => {
    if (!localStorage.getItem('currentUser')) {
      alert('Login First!!');
      navigate('/login');
    } else {
      const dataToSend = {
        pid: item._id,
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        product_image: item.product_image,
        uid: wish.uid,
      };
      const res1 = await addcart(dataToSend);
      if (res1.status === 201) {
        alert('Item added to cart!!');
        navigate('/cart');
      } else {
        alert('Product Already exists in cart');
      }
    }
  };

  const addwishlist = async (item) => {
    if (!localStorage.getItem('currentUser')) {
      alert('Login First!!');
      navigate('/login');
    } else {
      const dataToSend = {
        pid: item._id,
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        product_image: item.product_image,
        uid: wish.uid,
      };
      const res1 = await addwishs(dataToSend);
      if (res1.status === 201) {
        alert('Item added to Wishlist!!');
        navigate('/wish');
      } else {
        alert('Product Already exists');
      }
    }
  };

  useEffect(() => {
    getprod();
    userr();
  }, []);

  return (
    <>
       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ms-5 me-5">
        {prod?.map((item) => (
          <div className="col mb-4" key={item._id}>
            <Card
              style={{ width: '100%', height: '420px', cursor: 'pointer' }}
              className="border shadow text-center"
            >
              <Card.Img
                variant="top"
                src={`${BASE_URL}/upload/${item.product_image}`}
                style={{ height: '230px' }}
                onClick={() => {
                  storep(item._id);
                }}
                className="img-fluid m-2"
              />
              <Card.Body>
                <div id="t1" className="mb-2">
                  <b>{item.title}</b>
                </div>
                <h5>Price: ₹{item.price}</h5>
                <div className="card-footer d-flex justify-content-between">
                  <Button
                    className="btn"
                    variant="outline-dark"
                    onClick={() => {
                      addwishlist(item);
                    }}
                  >
                    <i className="fa-solid fa-lg fa-heart-circle-plus"></i>
                  </Button>
                  <Button
                    className="btn"
                    variant="outline-dark"
                    onClick={() => {
                      addtocart(item);
                    }}
                  >
                    <i className="fa-solid fa-cart-plus fa-lg"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pcard;
