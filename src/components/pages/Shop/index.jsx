import React from "react";
import Input from "../../UI/Input";
import Select from "react-select";
import { useForm } from "react-hook-form";
import "./FormCard.scss"

export default function ShopPage() {
  const countries = [
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "turkey", label: "Turkey" },
    { value: "italy", label: "Italy" },
    { value: "japan", label: "Japan" },
    { value: "usa", label: "USA" },
  ];

  const states = [
    { value: "fergana", label: "Fergana" },
    { value: "tashkent", label: "Tashkent" },
    { value: "kokand", label: "Kokand" },
    { value: "andijan", label: "Andijan" },
    { value: "bukhara", label: "Bukhara" },
  ];

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    console.log("First name: ", value.firstName)
    console.log("Last name: ", value.lastName)
    console.log("Country: ", value.country.label)
    console.log("City name: ", value.city)
    console.log("Street: ", value.street)
    console.log("Apartment: ", value.apartment)
    console.log("State: ", value.state.label)
    console.log("Zip: ", value.zip)
    console.log("Email: ", value.email)
    console.log("Phone number: ", value.phoneNumber)
    console.log("User notes: ", value.userNotes)
  };

  return (
    <>
      <p>
        <b>Home</b> / Shop / Checkout
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between mt-[36px]"
      >
        <div>
          <p className="font-semibold">Billing address</p>
          <div className="address__box">
            <div className="input__cards">
              <label>
                Firs name <span className="text-rose-600 font-bold">*</span>
              </label>
              <Input
                type="text"
                name="firstName"
                placeholder="First name"
                {...register("firstName", {
                  required: "First name must be filled",
                })}
                className={`${errors.firstName?.message && "border-red-500"}`}
              />
              <ErrorMessage error={errors?.firstName?.message} />
            </div>
            <div className="input__cards">
              <label>
                Last name <span className="text-rose-600 font-bold">*</span>
              </label>
              <Input
                type="text"
                name="lastName"
                placeholder="Last name"
                {...register("lastName", {
                  required: "Last name must be filled",
                })}
                className={`${errors.lastName?.message && "border-red-500"}`}
              />
              <ErrorMessage error={errors?.lastName?.message} />
            </div>

            <div className="input__cards">
              <label>
                Country / Region{" "}
                <span className="text-rose-600 font-bold">*</span>
              </label>
              <Select
                options={countries}
                placeholder="Select a countrry / region"
                className={`border-gray-300 w-[350px] mt-[10px] h-[50px] ${
                  errors.country?.message && "border-red-500"
                }`}
                {...register("country", {
                  required: "Country must be selected",
                })}
                onChange={(e) => setValue("country", e)}
              />
              <ErrorMessage error={errors?.country?.message} />
            </div>
            <div className="input__cards">
              <label>
                Town / City <span className="text-rose-600 font-bold">*</span>
              </label>
              <Input
                type="text"
                name="city"
                placeholder=""
                {...register("city", {
                  required: "City name must be filled",
                })}
                className={`${errors.city?.message && "border-red-500"}`}
              />
              <ErrorMessage error={errors?.city?.message} />
            </div>

            <div className="input__cards">
              <label>
                Street address{" "}
                <span className="text-rose-600 font-bold">*</span>
              </label>
              <Input
                type="text"
                name="street"
                placeholder="House number and street name"
                {...register("street", {
                  required: "Street name must be filled",
                })}
                className={`${errors.street?.message && "border-red-500"}`}
              />
              <ErrorMessage error={errors?.street?.message} />
            </div>
            <div className="input__cards">
              <label>Apartment</label>
              <Input
                type="text"
                name="apartment"
                placeholder="Appartment, suite, unit, etc. (optional)"
                {...register("apartment")}
              />
            </div>

            <div className="input__cards">
              <label>
                State
                <span className="text-rose-600 font-bold"> *</span>
              </label>
              <Select
                options={states}
                placeholder="Select a state"
                className={`border-gray-300 w-[350px] mt-[10px] h-[50px] ${
                  errors.country?.message && "border-red-500"
                }`}
                {...register("state", {
                  required: "State must be selected",
                })}
                onChange={(e) => setValue("state", e)}
              />
              <ErrorMessage error={errors?.state?.message} />
            </div>
            <div className="input__cards">
              <label>
                Zip <span className="text-rose-600 font-bold">*</span>
              </label>
              <Input
                type="text"
                name="zip"
                placeholder=""
                {...register("zip", {
                  required: "Zip field must be filled",
                })}
                className={`${errors.zip?.message && "border-red-500"}`}
              />
              <ErrorMessage error={errors?.zip?.message} />
            </div>

            <div className="input__cards">
              <label>
                Email address <span className="text-rose-600 font-bold">*</span>
              </label>
              <Input
                type="email"
                name="email"
                placeholder="swejhf@gmail.com"
                {...register("email", {
                  required: "Email must be filled",
                })}
                className={`${errors.email?.message && "border-red-500"}`}
              />
              <ErrorMessage error={errors?.email?.message} />
            </div>
            <div className="input__cards">
              <label>
                Phone number <span className="text-rose-600 font-bold">*</span>
              </label>
              <Input
                type="number"
                name="phoneNumber"
                placeholder="+998 94 445 54 45"
                {...register("phoneNumber", {
                  required: "Phone number must be filled",
                })}
                className={`${errors.phoneNumber?.message && "border-red-500"}`}
              />
              <ErrorMessage error={errors?.phoneNumber?.message} />
            </div>

            <div>
              <label>{`Order notes (optional)`}</label>
              <br />
              <textarea
                className="border mt-[10px] p-2 border-gray-300 w-[350px] h-[152px]"
                name="orderNote"
                {...register("userNotes")}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-[405px] ">
          <p className="font-bold">Your order</p>

          <div className="flex justify-between w-[405px] mt-[21px] pb-[5px] border-b border-gray-300 pr-[10px]">
            <p>Pruducts</p>
            <p>Subtotal</p>
          </div>

          <div className="w-[405px] h-[70px] mt-[11px] justify-between items-center flex pr-[10px]">
            <div>
              <img src="/src/assets/images/image 11.png" alt="" />
            </div>
            <div>
              <p className="font-semibold">Barberton Daisy</p>
              <p className="text-gray-400">SKU: 1995751877966</p>
            </div>
            <p className="text-gray-400">{`(2x)`}</p>
            <p className="font-semibold text-green-600">$238.00</p>
          </div>

          <div className="w-[405px] h-[70px] mt-[11px] justify-between items-center flex pr-[10px]">
            <div>
              <img src="/src/assets/images/image 15.png" alt="" />
            </div>
            <div>
              <p className="font-semibold">Blushing Bromeliad</p>
              <p className="text-gray-400">SKU: 19957518757065</p>
            </div>
            <p className="text-gray-400">{`(6x)`}</p>
            <p className="font-semibold text-green-600">$834.00</p>
          </div>

          <div className="w-[405px] h-[70px] mt-[11px] justify-between items-center flex pr-[10px]">
            <div>
              <img src="/src/assets/images/image 16.png" alt="" />
            </div>
            <div>
              <p className="font-semibold">Aluminum Plant</p>
              <p className="text-gray-400">SKU: 1995751877786</p>
            </div>
            <p className="text-gray-400">{`(2x)`}</p>
            <p className="font-semibold text-green-600">$1,611.00</p>
          </div>

          <div className="w-[321px]  ml-[84px] mt-[17px]">
            <p className="text-end">
              Have a coupon code?
              <span className="text-green-500 font-medium"> Click here</span>
            </p>
            <div className="flex justify-between mt-[15px]">
              <p>Subtotal</p>
              <p className="font-semibold">$2,683.00</p>
            </div>
            <div className="flex justify-between mt-[15px]">
              <p>Coupon Discount</p>
              <p className="text-gray-500">{`(-) 00.00`}</p>
            </div>
            <div className="flex justify-between mt-[15px]">
              <p>Shiping</p>
              <p className="font-semibold">$16.00</p>
            </div>
            <p className="text-green-500 text-end mt-[8px] mb-[17px]">
              View shipping charge
            </p>
            <hr />
            <div>
              <div className="flex justify-between mt-[15px]">
                <p className="font-semibold">Total</p>
                <p className="font-semibold text-green-700">$2,699.00</p>
              </div>
              <p className="font-semibold mt-[47px]">Payment Method</p>
              <div className="w-full h-[45px] mt-[15px] border flex items-center gap-2 border-gray-400">
                <input
                  name="paymentMethod"
                  value={"paypal"}
                  type="radio"
                  className=" text-green-700 w-[50px] h-[15px] cursor-pointer"
                />
                <p>Paypal Visa MasterCard</p>
              </div>
              <div className="w-full h-[45px] mt-[15px] border flex items-center gap-2 border-gray-400">
                <input
                  name="paymentMethod"
                  value={"transfer"}
                  type="radio"
                  className=" text-green-700 w-[50px] h-[15px] cursor-pointer"
                />
                <p>Dorect bank transfer</p>
              </div>
              <div className="w-full h-[45px] mt-[15px] border flex items-center gap-2 border-gray-400">
                <input
                  name="paymentMethod"
                  value={"cash"}
                  type="radio"
                  className=" text-green-700 w-[50px] h-[15px] cursor-pointer"
                />
                <p>Cash on delivery</p>
              </div>
              <button
                type="submit"
                className="w-full h-[45px] bg-green-600 mt-[50px] text-white rounded-[4px]"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

const ErrorMessage = ({ error }) => {
  return <div className="text-[red]">{error}</div>;
};
