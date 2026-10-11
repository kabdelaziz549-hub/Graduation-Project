import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">أحلى قهوة هتدوقها في حياتك</h1>
            <p className="lead my-4">اكتشف أكتر من 30 نوع قهوة من كل أنحاء العالم، بمكونات طبيعية وطريقة تحضير سهلة.</p>
            <Link to="/products" className="btn btn-dark btn-lg">شوف المنيو</Link>
          </div>
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" className="img-fluid rounded shadow" alt="coffee" />
          </div>
        </div>
      </div>
    </div>
  )
}