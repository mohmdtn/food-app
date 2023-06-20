import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import image from '../../pictures/hamburger.svg';
import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <main>
      <section className="auth-page">
        <section className="head">
          <img className="pt-5" src={image} alt="" />
          <h4 className="fw-bold mb-0 pb-4">دورهمی ولی آسون!</h4>
        </section>
        <section className="pt-5">
          <p className="mb-4">کمتر از سی ثانیه وقتتو میگیره ولی بعدش میتونی کافه و رستورانی که خواستی رو خیلی راحت بری و نگران
            پرداخت یک جا صورت حساب نباشی.
          </p>
          <div className="px-3">
            <Link className="button" to="/register"><HiArrowRight className='ms-2' />ورود</Link>
          </div>
        </section>
      </section>
    </main>
  )
}
