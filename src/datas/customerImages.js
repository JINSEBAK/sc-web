import etri from "assets/images/customers/etri.png";
import ssg from "assets/images/customers/ssg.png";
import skt from "assets/images/customers/skt.png";
import kt from "assets/images/customers/kt.png";
import administration from "assets/images/customers/administration.png";
import jeollabukdo from "assets/images/customers/jeollabukdo.png";
import nice from "assets/images/customers/nice.png";
import Chungnam from "assets/images/customers/Chungnam.png";
import koreaUniversity from "assets/images/customers/koreaUniversity.png";
import dlit from "assets/images/customers/dlit.png";
import HankukUniversity from "assets/images/customers/HankukUniversity.png";
import beia from "assets/images/customers/beia.png";
import sidonios from "assets/images/customers/sidonios.png";
import sistrade from "assets/images/customers/sistrade.png";
import isep from "assets/images/customers/isep.png";
import kocsistem from "assets/images/customers/kocsistem.png";
import torun from "assets/images/customers/torun.png";
import tav from "assets/images/customers/tav.png";
import samm from "assets/images/customers/samm.png";
import inosens from "assets/images/customers/inosens.png";
import celtic from "assets/images/customers/celtic.png";
import hankook from "assets/images/customers/hankook.png";
import hundai from "assets/images/customers/hundai.png";
import emart from "assets/images/customers/emart.png";
import lotteMart from "assets/images/customers/lotteMart.png";
import lotteTelecom from "assets/images/customers/lotte-telecom.png";
import hanwha from "assets/images/customers/hanwha.png";
import prudential from "assets/images/customers/prudential.png";
import spc from "assets/images/customers/spc.png";
import ibk from "assets/images/customers/ibk.png";

const images = {
  etri,
  ssg,
  skt,
  kt,
  administration,
  jeollabukdo,
  nice,
  Chungnam,
  koreaUniversity,
  dlit,
  HankukUniversity,
  beia,
  sidonios,
  sistrade,
  isep,
  kocsistem,
  lotteTelecom,
  torun,
  tav,
  samm,
  inosens,
  celtic,
  hankook,
  hundai,
  emart,
  lotteMart,
  hanwha,
  prudential,
  spc,
  ibk,
};

export function getImageByKey(key) {
  return images[key];
}
