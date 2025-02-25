import group from '@/assets/Group.png';
import offerIcon from '@/assets/Vector.png';
import promoIcon from '@/assets/promo_icon.png';
import OfferComp from './OfferComp';
import { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Checkbox } from '@/components/ui/checkbox';
import CreateOfferModal from './CreateOfferModal';
import useGetApiReq from '@/hooks/useGetApiReq';

const CreateOffer = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [activeTab, setActiveTab] = useState('allUser')
    const [activePriseTab, setActivePriseTab] = useState('')
    const [slideValue, setSlideValue] = useState([30])
    const [offerValue, setOfferValue] = useState('bh')
    const [isCreateCouponModalOpen, setIsCreateCouponModalOpen] = useState(false);

    const handleCheckboxChange = () => {
        setTermsAccepted(!termsAccepted);
    };

    console.log(offerValue)

    return (
        <>
            <div className='px-10 py-4'>
                <h1 className='class-base5'>SUGGESTED OFFERS FOR YOU</h1>
                <div className='bg-white rounded-xl'>
                    <div className='p-4 bg-[#1AA6F1] flex justify-between rounded-xl mt-4'>
                        <div>
                            <h2 className='text-white font-numans font-bold text-2xl'>50% Offer up to  ₹120</h2>
                            <p className='text-white class-base5 mt-1'>Uplift your business to the sky!</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src={group} alt="group" />
                            <Sheet>
                                <SheetTrigger asChild>
                                    <button className='py-3 px-5 bg-[#006296] class-base5 text-white rounded'>Turn on now</button>
                                </SheetTrigger>
                                <SheetContent className='w-[561px] bg-[#FFFFFF] px-0 overflow-y-scroll'>
                                    <div className="">
                                        <h2 className="class-base4 five-color px-4 py-2">Create New Offer</h2>
                                        <div className='h-[137px] bg-[#4A81DA] flex items-end'>
                                            <h3 className="class-2xl4 fourth-color px-4 pb-3">50% OFF upto Rs 120</h3>
                                        </div>
                                        <div className="">
                                            <div className='px-4 pt-4 pb-7 w-full flex flex-col gap-4'>
                                                <Label className="five-color class-xl6">
                                                    Campaign start date
                                                </Label>
                                                <input
                                                    type="date"
                                                    id="startDate"
                                                    className="w-full p-2 border rounded focus:ring focus:ring-blue-300 h-[46px]"
                                                />
                                                <p className="twentyOne-color class-sm2">
                                                    Your offer will start on 3rd Oct 2024 at 7:00 PM. You can stop this offer at anytime.
                                                </p>
                                            </div>
                                            <div className='border-[5px] border-[#F1F1F1]'></div>
                                            <div className='px-4 pt-4 pb-7 w-full flex flex-col gap-4'>
                                                <h4 className="five-color class-base4">Offer details</h4>
                                                <p className="five-color class-base4">
                                                    Offer applicable for: All users on all menu items, excluding MRP items
                                                </p>
                                                <p className="five-color class-base4">Minimum order value: Rs159</p>
                                                <p className="five-color class-base4">
                                                    Value at: Desi Platters, Khurram Nagar (ID: 21287332)
                                                </p>
                                            </div>
                                            <div className='border-[5px] border-[#F1F1F1]'></div>
                                            <div className="px-4 flex items-center gap-4 pt-3 pb-28">
                                                <Checkbox checked={termsAccepted} onCheckedChange={handleCheckboxChange} className='h-6 w-6 rounded-lg' />
                                                <Label className='class-base4 five-color'>
                                                    I have read and accept all the <span className='thirteen-color'>terms and conditions</span>
                                                </Label>
                                            </div>
                                            <div className='flex flex-col px-4 pb-4'>
                                                <button className='h-[53px] rounded-lg bg-[#CDCDCD] class-base4 fourth-color'>Choose outlet & Activate</button>
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                        </div>
                    </div>
                    <p className='class-base1 primary-color py-3 px-1'>This offer is better than 90% of Other North Indian Restaurants in the area.</p>
                </div>
                <div className="flex gap-3 mt-5">
                    <OfferComp
                        offerIcon={offerIcon}
                        offerPercent={50}
                        offerVale={100}
                        tag={""}
                        setOfferValue={setOfferValue}
                    />
                    <OfferComp
                        offerIcon={offerIcon}
                        offerPercent={40}
                        offerVale={80}
                        tag={""}
                        setOfferValue={setOfferValue}
                    />
                    <OfferComp
                        offerIcon={offerIcon}
                        offerPercent={50}
                        offerVale={100}
                        tagTitle={"new users only"}
                        setOfferValue={setOfferValue}
                    />
                    <OfferComp
                        offerIcon={offerIcon}
                        offerPercent={40}
                        offerVale={100}
                        tagTitle={"new users only"}
                        setOfferValue={setOfferValue}
                    />
                    <OfferComp
                        offerIcon={offerIcon}
                        offerPercent={30}
                        offerVale={75}
                        tagTitle={"new users only"}
                        setOfferValue={setOfferValue}
                    />
                    <OfferComp
                        offerIcon={offerIcon}
                        offerPercent={50}
                        offerVale={100}
                        tagTitle={"Lunch only"}
                        isTagRed
                        setOfferValue={setOfferValue}
                    />
                    <OfferComp
                        offerIcon={offerIcon}
                        offerPercent={40}
                        offerVale={80}
                        tagTitle={"Breakfast only"}
                        isTagRed
                        setOfferValue={setOfferValue}
                    />
                </div>
                <p className='mt-5 class-base5 text-[#7991A4]'>Personalized offer for you</p>

                <div onClick={() => setIsCreateCouponModalOpen(true)} className="grid grid-cols-2 gap-5 mt-3 cursor-pointer">
                    <div className='bg-white border rounded grid grid-cols-[70px_1fr] gap-3 p-5'>
                        <div className="w-[70px] h-[70px] rounded-full bg-[#A4F4E7] flex justify-center items-center">
                            <img src={promoIcon} alt="promoIcon" />
                        </div>
                        <div>
                            <h3 className='class-xl6'>Promo Code</h3>
                            <p className='text-[#7991A4] class-base1 mt-1'>Thrill customers with complimentary discounts on every order.</p>
                        </div>
                    </div>
                </div>

                <p className='max-w-[980px] mt-7 mx-auto class-lg1 text-[#637D92]'>Note: To create fixed discounts, percentage discounts, or buy-one-get-one offers, use the Capsico Restaurant Partner app on Android. This feature will be available on the web dashboard soon.”</p>

            </div>
            {/* <div className='bg-[#FFFFFF] w-[561px] h-[880px] absolute top-[15.1%] right-0'>
                <h2 className="class-base4 five-color px-4 py-2 border-b-[1px] border-[green]">Create New Offer</h2>
                <div className='px-4 pt-4 pb-7 w-full flex flex-col gap-4'>
                    <h3 className='class-xl6 five-color mb-3'>Select your discount</h3>
                    <button className='border-[1px] border-[#D6D6D6] rounded-lg five-color class-xl4 h-[46px]'>40% OFF upto Rs120</button>
                    <Slider defaultValue={[33]} max={100} step={1} />
                    <div className='flex gap-4'>
                        <button onClick={() => setActivePriseTab('noMax')} className={`border-[1px] rounded-lg class-sm4 h-[46px] w-[95px] ${activePriseTab === 'noMax' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] twentyTwo-color border-[#D6D6D6]'}`}>No Max cap</button>
                        <button onClick={() => setActivePriseTab('150')} className={`border-[1px] rounded-lg class-sm4 h-[46px] w-[95px] ${activePriseTab === '150' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] twentyTwo-color border-[#D6D6D6]'}`}>Rs150</button>
                        <button onClick={() => setActivePriseTab('120')} className={`border-[1px] rounded-lg class-sm4 h-[46px] w-[95px] ${activePriseTab === '120' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] twentyTwo-color border-[#D6D6D6]'}`}>Rs120</button>
                    </div>
                </div>
                <div className='border-[5px] border-[#F1F1F1]'></div>
                <div className='px-4 pt-4 pb-7 w-full flex flex-col gap-4'>
                    <div>
                        <h3 className='class-xl6 five-color mb-3'>Discount applicable for</h3>
                        <div className='flex items-center justify-between gap-4 w-full'>
                            <button onClick={() => setActiveTab('allUser')} className={`w-full h-[46px] class-sm4 rounded-lg border-[1px] ${activeTab === 'allUser' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] eleven-color border-[#6E6E6E]'}`}>All users</button>
                            <button onClick={() => setActiveTab('newUser')} className={`w-full h-[46px] class-sm4 rounded-lg border-[1px] ${activeTab === 'newUser' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] eleven-color border-[#6E6E6E]'}`}>New Users</button>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="email" className='class-sm4 five-color'>Select meal time</Label>
                        <Select>
                            <SelectTrigger className="w-full max-w-[342px] h-[46px] border-[1px] border-[#D6D6D6] rounded-lg py-2 px-4 focus:ring focus:ring-transparent focus:border-black mt-3">
                                <SelectValue placeholder="All day (24 hours)" />
                            </SelectTrigger>

                            <SelectContent className='five-color class-base2'>
                                <SelectItem value="all-day">All day (24 hours)</SelectItem>
                                <SelectItem value="a">ABC</SelectItem>
                                <SelectItem value="b">ABC2</SelectItem>
                                <SelectItem value="c">ABC3</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className='class-sm2 twentyOne-color mt-2'>All users who place an order in this meal will be eligible for the offer</p>
                    </div>
                </div>
                <div className='border-[5px] border-[#F1F1F1]'></div>
                <div className='px-4 pt-4 w-full flex flex-col gap-28'>
                    <div>
                        <Label htmlFor="email" className='class-xl6 five-color'>Campaign start date</Label>
                        <Select>
                            <SelectTrigger className="w-full max-w-[342px] h-[46px] border-[1px] border-[#D6D6D6] rounded-lg py-2 px-4 focus:ring focus:ring-transparent focus:border-black mt-3">
                                <SelectValue placeholder="4th oct 2024" />
                            </SelectTrigger>

                            <SelectContent className='five-color class-base2'>
                                <SelectItem value="4th-day">4th oct 2024</SelectItem>
                                <SelectItem value="a">ABC</SelectItem>
                                <SelectItem value="b">ABC2</SelectItem>
                                <SelectItem value="c">ABC3</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className='class-sm2 twentyOne-color mt-2'>Your offer will start on 3rd oct 2024 at 7:00 PM. You can stop this offer at anytime.</p>
                    </div>
                    <button className={`h-[53px] rounded-lg bg-[#CDCDCD] class-base4 fourth-color`}>Choose outlet & Activate</button>
                </div>
            </div> */}

            {isCreateCouponModalOpen &&
                <CreateOfferModal
                    isCreateCouponModalOpen={isCreateCouponModalOpen}
                    setIsCreateCouponModalOpen={setIsCreateCouponModalOpen}
                />
            }
        </>
    )
}

export default CreateOffer