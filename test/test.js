import {IsTime} from "../src/table";
import {IsDate} from "../src/table";
import expect from "expect";

//=============================IsTime===================
test('time ok', () => {
    expect(IsTime("17.30")).toBeTruthy();
});

test('time ok', () => {
    expect(IsTime("00.30")).toBeTruthy();
});

test('time ok', () => {
    expect(IsTime("0.0")).toBeTruthy();
});

test('time ok', () => {
    expect(IsTime("15.03")).toBeTruthy();
});

test('time wrong', () => {
    expect(IsTime("24.30")).toBeFalsy();
});

test('time wrong', () => {
    expect(IsTime("13.87")).toBeFalsy();
});

test('time wrong', () => {
    expect(IsTime("fgh.87")).toBeFalsy();
});

test('time wrong', () => {
    expect(IsTime("fgh")).toBeFalsy();
});

test('time wrong', () => {
    expect(IsTime("fgh.sfvg")).toBeFalsy();
});

test('time wrong', () => {
    expect(IsTime("13.dsf87")).toBeFalsy();
});

test('time wrong', () => {
    expect(IsTime("13.87sef")).toBeFalsy();
});

test('time wrong', () => {
    expect(IsTime("13.30.13")).toBeFalsy();
});

//============================IsDate=================
test('date ok', () => {
    expect(IsDate("17-5-22")).toBeTruthy();
});

test('date ok', () => {
    expect(IsDate("07-5-22")).toBeTruthy();
});

test('date ok', () => {
    expect(IsDate("17-05-22")).toBeTruthy();
});

test('date wrong', () => {
    expect(IsDate("17.05.22")).toBeFalsy();
});

test('date wrong', () => {
    expect(IsDate("17-05-22-")).toBeFalsy();
});

test('date wrong', () => {
    expect(IsDate("fgh17-05-22")).toBeFalsy();
});

test('date wrong', () => {
    expect(IsDate("zfd-05-22")).toBeFalsy();
});

test('date wrong', () => {
    expect(IsDate("17-zdxfcg-22")).toBeFalsy();
});

test('date wrong', () => {
    expect(IsDate("17-05-zxdcfgv")).toBeFalsy();
});

test('date wrong', () => {
    expect(IsDate("31-02-22")).toBeFalsy();
});

test('date wrong', () => {
    expect(IsDate("29-11-22")).toBeFalsy();
});

test('date wrong', () => {
    expect(IsDate("32-01-22")).toBeFalsy();
});

//=============================================
