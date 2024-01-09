import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Check, PatchCheck } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { AccordionContext, Form } from "react-bootstrap";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
import Router, { useRouter } from "next/router";
import ShipInfo from "../../components/ShipInfo";
import OrderHero from "../../components/order-flow/OrderHero";
import OnlineTreatment from "../../components/order-flow/OnlineTreatment";
import Choice from "../../components/order-flow/Choice";
import { OrderForm } from "../../components/order-flow/OrderForm";
import Chart from "../../components/order-flow/Chart";


export default function OrderFlow(props) {
 return(
  <div>
    <OrderHero></OrderHero>
    <Chart></Chart>
    <OnlineTreatment></OnlineTreatment>
    <Choice></Choice>
    <OrderForm></OrderForm>
   
  
  </div>
 )
}
