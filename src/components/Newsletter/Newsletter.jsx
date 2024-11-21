import bellIcon from '../../assets/bell icon.png'
import '../Header/Header.css'

const Newsletter = () => {
    return (
        <div className="max-w-6xl mx-auto bg-orange-100 rounded-lg">
            <div className='flex text-center justify-center items-center gap-3 pt-12 mb-4'>
                 <img className='w-[40px] rounded-full' src={bellIcon} alt="" />
                 <h2 className="text-2xl font-bold mb-2 ">
                    Subscribe to our weekly newsletter!</h2>
            </div>
            <p className='w-2/5 mx-auto mb-4  text-gray-500'>Get coupons from your favorite retailers sent to your inbox at the beginning of every week. You can cancel anytime.</p>
            <form
                className="join flex justify-center items-center pb-8 mb-8 flex-wrap gap-4"
                >

            <div className="join ">
                <input
                    type="text"
                    placeholder=" Your email address"
                    className="input input-bordered join-item w-96" />
                <button className="btn bg-cyan-700 h-[60px] text-lg text-white font-bold join-item">Subscribe</button>
            </div>
            </form>
        </div>
    );
};

export default Newsletter;