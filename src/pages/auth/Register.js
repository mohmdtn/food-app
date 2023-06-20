import { HiArrowRight } from 'react-icons/hi';
import image from '../../pictures/number.svg';

export const Register = () => {
  return (
    <main>
        <section className="auth-page">
            <section className="head number-img">
                <img className="pt-5" src={image} alt="" />
            </section>
            <section className="pt-5 flex-grow-1 d-flex flex-column justify-content-between">
                <section>
                    <div className="pb-3 px-3">
                        <input className="form-control number-input" placeholder="شماره تلفن" type="text" />
                    </div>
                    <div className="px-3">
                        <button className="button"><HiArrowRight className='ms-2' />تایید شماره</button>
                    </div>
                </section>
                <div>
                    <p className="mb-3">آیا میدونستید در برنامه ی ما میتوانید فقط سهم خود و یا افرادی را که میخواهید را حساب کنید ؟</p>
                </div>
            </section>
        </section>
    </main>
  )
}