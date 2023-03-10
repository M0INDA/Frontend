import CalendarSvg from "@assets/svg/CalendarSvg";
import Layout from "@components/layout/Layout";
import { icons } from "@utils/getIcon";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { useForm } from "react-hook-form";
import {
  regOptIcon,
  regOptTel,
  regOptHashtag,
  regOptTitle,
  regOptStartdate,
  regOptContent,
  regOptStudyName,
} from "@utils/valids";
import { IIcon } from "@allTypes/study";

const EditStudy = () => {
  const [isiconModal, setIsIconModal] = useState(false);
  const handleModal = () => {
    setIsIconModal(!isiconModal);
  };

  const [IconSelect, setIconSelect] = useState<IIcon["icon"]>("");
  const SelectIconHandler = (i: IIcon) => () => {
    setIconSelect(i.icon);
    setIsIconModal(!isiconModal);
  };

  const [checkCategory, setCheckCategory] = useState<string>("");
  const changeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckCategory(event.target.value);
    }
  };

  const [islanguageStatus, setIsLanguageStatus] = useState(false);
  const handleLanguage = () => {
    setIsLanguageStatus(!islanguageStatus);
    setIsCareerStatus(false);
    setHobbyStatus(false);
    setIsPublicStatus(false);
    setIsEtcStatus(false);
  };
  const [iscareerStatus, setIsCareerStatus] = useState(false);
  const handleJob = () => {
    setIsLanguageStatus(false);
    setIsCareerStatus(!iscareerStatus);
    setHobbyStatus(false);
    setIsPublicStatus(false);
    setIsEtcStatus(false);
  };
  const [ishobbyStatus, setHobbyStatus] = useState(false);
  const handleHobby = () => {
    setIsLanguageStatus(false);
    setIsCareerStatus(false);
    setHobbyStatus(!ishobbyStatus);
    setIsPublicStatus(false);
    setIsEtcStatus(false);
  };
  const [ispublicStatus, setIsPublicStatus] = useState(false);
  const handlePublic = () => {
    setIsLanguageStatus(false);
    setIsCareerStatus(false);
    setHobbyStatus(false);
    setIsPublicStatus(!ispublicStatus);
    setIsEtcStatus(false);
  };
  const [isetcStatus, setIsEtcStatus] = useState(false);
  const handleEtc = () => {
    setIsLanguageStatus(false);
    setIsCareerStatus(false);
    setHobbyStatus(false);
    setIsPublicStatus(false);
    setIsEtcStatus(!isetcStatus);
  };

  const [hashtags, setHashtags] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const value = e.currentTarget.value;
    if (!value.trim()) return;
    if (hashtags.length >= 3) return;
    setHashtags([...hashtags, value]);
    e.currentTarget.value = "";
    e.preventDefault();
  };
  const removeHashtags = (index: number) => {
    setHashtags(hashtags.filter((el, i) => i !== index));
  };

  const [startDate, setStartDate] = useState<Date>(new Date());
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onValid = (data: any) => {};
  
  useEffect(() => {
    watch("content");
  }, [watch]);

  useEffect(() => {
    setValue("content", "");
  }, [setValue]);

  return (
    <Layout>
      <div className="flex">
        <div className="flex-col">
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            ?????? ?????????
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[8.6rem] h-[2.4rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            ????????? ??????
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[9.2rem] leading-[2.4rem] text-primary-600">
            ???????????? ??????
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            ????????? ??????
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            ?????? ??????
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            ????????????
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[9.2rem] leading-[2.4rem] text-primary-600">
            ????????? ?????????
          </div>
          <div className="Sub2 ml-[23.1rem] mt-[5.2rem] h-[2.4rem] w-[7.8rem] leading-[2.4rem] text-primary-600">
            ????????? ??????
          </div>
        </div>

        <div className="flex flex-col">
          <form onSubmit={handleSubmit(onValid)}>
            {/** ?????? ????????? */}
            <div
              className="ml-[15.8rem] mt-[5rem] flex h-[8.8rem] w-[8.8rem] flex-[1] cursor-pointer items-center justify-center rounded-[0.8rem] bg-[#F7F6F6] text-primary-400"
              {...register("icon", regOptIcon())}
              onClick={handleModal}
            >
              {!IconSelect ? (
                <div className='Sub2 w-[4.5rem] h-[4.8rem] leading-[2.4rem] text-center'>????????? ??????</div>
              ) : (
                <img
                  className="h-[6.8rem] w-[6.8rem] leading-[8.2rem]"
                  src={IconSelect}
                  alt=""
                />
              )}
            </div>

            {isiconModal && (
              <div className="boxShadow absolute z-[10] ml-[15.8rem] mt-[1rem] flex h-[24.2rem] w-[25.5rem] flex-col rounded-[1rem] bg-primary-100">
                <p className="Cap3 mt-[1.8rem] mb-[1.4rem] flex justify-center text-primary-600">
                  ?????? ????????? ??????
                </p>
                <div className="m-[0_2rem] flex flex-wrap gap-[1.6rem]">
                  {Object.values(icons).map((icon, i) => (
                    <img
                      key={icon}
                      onClick={SelectIconHandler({ i, icon })}
                      className="h-[3rem] w-[3rem] cursor-pointer"
                      src={icon}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            )}

            {/** ????????? ?????? */}
            <input
              className="Sub2 textColor ml-[15.8rem] mt-[2.4rem] mr-[50.1rem] h-[5.2rem] w-[68.2rem] rounded-[0.8rem] border-[0.11rem_primary-200] bg-[#F9F7F6] px-[1.8rem] py-[1.4rem] opacity-[0.55] placeholder:text-primary-400"
              {...register("title", regOptTitle())}
              maxLength={64}
              placeholder="?????? 9??? ??????! ????????? ?????? ?????? ???????????? ???????????????"
            />
            <span className="w-full pl-5 text-sm font-bold text-red-600">
              {errors.title?.message as string}
            </span>

            {/** ???????????? ?????? */}
            <input
              className="Sub2 textColor ml-[15.8rem] mt-[2.4rem] mr-[50.1rem] h-[5.2rem] w-[68.2rem] rounded-[0.8rem] border-[0.11rem_primary-200] bg-[#F9F7F6] px-[1.8rem] py-[1.4rem] opacity-[0.55] placeholder:text-primary-400"
              {...register("studyName", regOptStudyName())}
              maxLength={25}
              placeholder="2023 ?????? ?????????"
            ></input>

            {/** ????????? ?????? */}
            <div className="Sub2 mt-[2.4rem] flex flex-row gap-[0.5rem] text-primary-500">
              {!islanguageStatus ? (
                <label
                  htmlFor="language"
                  className="ml-[15.8rem] h-[5.2rem] w-[10.2rem] cursor-pointer flex-row items-center rounded-[4.8rem] border-primary-200 border-[0.1rem_#E1E1E1] bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="language"
                    value="language"
                    className=""
                    onChange={changeRadio}
                    checked={islanguageStatus}
                    onClick={handleLanguage}
                  />
                  ??????
                </label>
              ) : (
                <label
                  htmlFor="language"
                  className="ml-[15.8rem] h-[5.2rem] w-[10.2rem] cursor-pointer flex-row items-center rounded-[4.8rem] border-[0.1rem_#E1E1E1] bg-[#ffb077] px-[3.6rem] py-[1.4rem] text-[#ffffff]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="language"
                    value="language"
                    className=""
                    onChange={changeRadio}
                    checked={islanguageStatus}
                    onClick={handleLanguage}
                  />
                  ??????
                </label>
              )}

              {!iscareerStatus ? (
                <label
                  htmlFor="career"
                  className="h-[5.2rem] w-[13.1rem] cursor-pointer flex-row items-center rounded-[4.8rem] border-primary-200 bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="career"
                    value="career"
                    onChange={changeRadio}
                    checked={iscareerStatus}
                    onClick={handleJob}
                  />
                  ????????????
                </label>
              ) : (
                <label
                  htmlFor="career"
                  className="h-[5.2rem] w-[13.1rem] cursor-pointer flex-row items-center rounded-[4.8rem] bg-[#ffb077] px-[3.6rem] py-[1.4rem] text-[#ffffff]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="career"
                    value="career"
                    onChange={changeRadio}
                    checked={iscareerStatus}
                    onClick={handleJob}
                  />
                  ????????????
                </label>
              )}

              {!ishobbyStatus ? (
                <label
                  htmlFor="hobby"
                  className="h-[5.2rem] w-[13.8rem] cursor-pointer flex-row items-center rounded-[4.8rem] border-primary-200 bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="hobby"
                    value="hobby"
                    onChange={changeRadio}
                    checked={ishobbyStatus}
                    onClick={handleHobby}
                  />
                  ??????,??????
                </label>
              ) : (
                <label
                  htmlFor="hobby"
                  className="h-[5.2rem] w-[13.8rem] cursor-pointer flex-row items-center rounded-[4.8rem] border-primary-200 bg-[#ffb077] px-[3.6rem] py-[1.4rem] text-[#ffffff]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="hobby"
                    value="hobby"
                    onChange={changeRadio}
                    checked={ishobbyStatus}
                    onClick={handleHobby}
                  />
                  ??????,??????
                </label>
              )}

              {!ispublicStatus ? (
                <label
                  htmlFor="public"
                  className="h-[5.2rem] w-[15.3rem] cursor-pointer flex-row items-center rounded-[4.8rem] border-primary-200 bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="public"
                    value="public"
                    className=""
                    onChange={changeRadio}
                    checked={ispublicStatus}
                    onClick={handlePublic}
                  />
                  ??????, ?????????
                </label>
              ) : (
                <label
                  htmlFor="public"
                  className="h-[5.2rem] w-[15.3rem] cursor-pointer flex-row items-center rounded-[4.8rem] bg-[#ffb077] px-[3.6rem] py-[1.4rem] text-[#ffffff]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="public"
                    value="public"
                    className=""
                    onChange={changeRadio}
                    checked={ispublicStatus}
                    onClick={handlePublic}
                  />
                  ??????, ?????????
                </label>
              )}

              {!isetcStatus ? (
                <label
                  htmlFor="etc"
                  className="h-[5.2rem] w-[10.2rem] cursor-pointer flex-row items-center rounded-[4.8rem] border-primary-200 bg-[#FCFBFA] px-[3.6rem] py-[1.4rem]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="etc"
                    value="etc"
                    onChange={changeRadio}
                    checked={isetcStatus}
                    onClick={handleEtc}
                  />
                  ??????
                </label>
              ) : (
                <label
                  htmlFor="etc"
                  className="h-[5.2rem] w-[10.2rem] cursor-pointer flex-row items-center rounded-[4.8rem] bg-[#ffb077] px-[3.6rem] py-[1.4rem] text-[#ffffff]"
                >
                  <input
                    type="radio"
                    name="category"
                    id="etc"
                    value="etc"
                    onChange={changeRadio}
                    checked={isetcStatus}
                    onClick={handleEtc}
                  />
                  ??????
                </label>
              )}
            </div>

            {/** ?????? ?????? */}
            <input
              className="Sub2 textColor ml-[15.8rem] mt-[2.4rem] mr-[50.1rem] h-[5.2rem] w-[68.2rem] rounded-[0.8rem] border-[0.11rem_primary-200] bg-[#F9F7F6] px-[1.8rem] py-[1.4rem] opacity-[0.55] placeholder:text-primary-400"
              {...register("tel", regOptTel())}
              placeholder="????????? ?????? ????????? ????????? ????????? ???????????????"
            ></input>

            {/** ???????????? */}
            <div className="Sub2 ml-[15.8rem] mr-[50.1rem] mt-[2.4rem] flex h-[5.2rem] w-[68.2rem] items-center rounded-[0.8rem] bg-[#F9F7F6] py-[1rem] pl-[1.8rem] text-primary-400 opacity-[0.55]">
              {hashtags.map((tag, index) => (
                <div key={index}>
                  <span className="Sub2 textColor inline-block rounded-[4.8rem] placeholder:text-primary-400">
                    #{tag}
                    <span
                      className=" inline-flex h-[1.8rem] w-[1.8rem] cursor-pointer items-center justify-center rounded-[50%] text-[black]"
                      onClick={() => {
                        removeHashtags(index);
                      }}
                    >
                      &times;
                    </span>
                  </span>
                </div>
              ))}
              <input
                type="text"
                onKeyDown={handleKeyDown}
                className="Sub2 textColor mr-[3rem] flex w-[21rem] flex-col border-none bg-[#F9F7F6] leading-[1.96rem] placeholder:text-primary-400 focus:ring-0"
                {...register("hashtag", regOptHashtag())}
                placeholder="?????? ?????? ??? ????????? ????????????"
                maxLength={6}
              />
            </div>

            {/** ????????? ????????? */}
            <div>
              <DatePicker
                className="Sub2 textColor ml-[15.8rem] mr-[50.1rem] mt-[2.4rem] h-[5.2rem] w-[68.2rem] cursor-pointer rounded-[0.8rem] border-none bg-[#F9F7F6] py-[1.4rem] pl-[1.8rem] leading-[2.4rem] underline opacity-[0.55] placeholder:text-primary-400 placeholder:underline focus:ring-0 "
                {...register("startdate", regOptStartdate())}
                locale={ko}
                selected={startDate}
                dateFormat="yyyy / MM / dd"
                onChange={(date: Date) => setStartDate(date)}
                minDate={new Date()} /** ?????? ??? ???????????? */
                showPopperArrow={false} /** ????????? ?????? ????????? ?????? */
                placeholderText="2022 / 02 / 01"
                fixedHeight
              />
              <CalendarSvg className="pointer-events-none absolute ml-[79.5rem] mt-[-4rem]" />
            </div>

            {/** ????????? ????????? ?????? */}
            <textarea
              className="Sub2 textColor ml-[15.8rem] mr-[50.1rem] mt-[2.4rem] h-[34.0rem] w-[68.2rem] resize-none rounded-[0.8rem] border-none bg-[#F9F7F6] pl-[1.8rem] pr-[2.9rem] pt-[1.4rem] opacity-[0.55] placeholder:text-primary-400 focus:ring-0"
              {...register("content", regOptContent())}
              placeholder="????????? ?????? ?????? ???????????? ???????????????!"
              maxLength={3000}
            />
            <div className="mt-[1rem] ml-[77.5rem]">
              {watch("content.length") === 3_000 ? (
                <span className="Cap4 text-red-600">
                  {watch("content.length")} / 3000
                </span>
              ) : (
                <span className="Cap4">
                  {watch("content.length")} / 3000
                </span>
              )}
            </div>

            {/** Submit */}
            <button className="Sub2 mt-[2.2rem] ml-[15.8rem] mr-[73.6rem] mb-[14.1rem] h-[6.4rem] w-[68.2rem] flex-row items-center justify-center rounded-[3.5rem] bg-primary-main px-[17rem] py-[2rem] text-primary-100">
              ????????? ????????????
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditStudy;
