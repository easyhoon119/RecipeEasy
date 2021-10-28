import ItemList from "./itemList";

function ListContainer({ list }) {
    // 데이터에 view 값이 들어있지 않아 임의의 배열 사용
    const sampleView = [2840, 335, 7772, 3970, 44000, 234];

    return (
        <div>
            <div
                style={{
                    padding: "1rem 2rem",
                    boxSizing: "border-box",
                    backgroundColor: "lightgray",
                    fontSize: "1.8rem",
                    fontWeight: "600",
                }}
                className="categoryName">
                {list[0].category} 요리
            </div>
            {/* 카테고리별 요리를 하위 컴포넌트로 뿌려주기 */}
            {list.map((item) => (
                <ItemList
                    list={item}
                    // 랜덤 함수를 이용하여 임의의 view값 불러오기
                    view={sampleView[Math.floor(Math.random() * 6)]}
                    key={item.id}
                />
            ))}
        </div>
    );
}

export default ListContainer;
