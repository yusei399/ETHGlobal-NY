
"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Text, Button, Link } from '@chakra-ui/react';

const Person = (props) => {
  const prop = props.person;
  const [showImage, setShowImage] = useState(false); // 画像の表示状態を管理するためのステート

  const cardFooterStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%", 
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <>
		<Card width={400} height={200}>
		{/* 詳細ボタンが押されたときに表示するコンテンツ */}
		{showImage ? (
				<div style={imageContainerStyle}>
					<Image src={prop.image} alt={prop.name} width={200} height={200} />
					<CardFooter style={cardFooterStyle}>
						<Button onClick={toggleImage}>戻る</Button>
					</CardFooter>
				</div>
		) : (
			<>
			<CardHeader>
				<Text>{prop.roll}</Text>
			</CardHeader>
			<CardBody>
				<Text>{prop.name}</Text>
			</CardBody>
			<CardFooter style={cardFooterStyle}>
				<Text>{prop.sex}</Text>
				<Button onClick={toggleImage}>詳細</Button>
			</CardFooter>
			</>
		)}
		</Card>
    </>
  );
}

export default Person;

