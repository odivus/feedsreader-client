const getClickCoords = (item) => {
  const element = item.getBoundingClientRect();
  
  const elementLeft = element.left + window.pageXOffset,
        elementTop = element.top + window.pageYOffset,
        elementHeight = element.bottom - elementTop;

  const positionX = elementLeft,
        positionY = elementTop + elementHeight;

  return {
    bottomX: positionX,
    bottomY: positionY,
  };
}

export default getClickCoords;