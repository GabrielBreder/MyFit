import React from "react";
import moment from "moment";
import CalendarStrip from "react-native-calendar-strip";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FlatList, Text } from "react-native";

import {
  Container,
  HeaderContainer,
  HeaderContainerHighlight,
  HeaderTextHighlight,
  HeaderTextCounterHighlight,
  HeaderTitle,
  BodyContainer,
} from "./styles";
import ItemList from "../../components/ItemList";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: "a",
      name: "pao",
      kcal: 400,
      date: moment(),
    },
    {
      id: "b",
      name: "arroz",
      kcal: 350,
      date: moment(),
    },
  ];

  const handleOneNewItem = (): void => {
    navigation.navigate("NewItem");
  };

  return (
    <Container>
      <HeaderContainer>
        <CalendarStrip
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          style={{ height: 100, paddingTop: 20, paddingBottom: 5 }}
          calendarHeaderStyle={{ color: "white", marginBottom: 15 }}
          dateNumberStyle={{ color: "white" }}
          dateNameStyle={{ color: "white" }}
          scrollable={true}
          highlightDateNumberStyle={{ color: "yellow" }}
          highlightDateNameStyle={{ color: "yellow" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={() => null}
          startingDate={moment().subtract(3, "days")}
          selectedDate={moment()}
          scrollerPaging={true}
          iconLeft={require("../../assets/arrow-left.png")}
          iconRight={require("../../assets/arrow-right.png")}
        />
        <HeaderTitle>Consumido no dia</HeaderTitle>
        <HeaderContainerHighlight>
          <HeaderTextCounterHighlight>100</HeaderTextCounterHighlight>
          <HeaderTextHighlight>/kcal</HeaderTextHighlight>
        </HeaderContainerHighlight>
      </HeaderContainer>
      <BodyContainer>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemList item={item} />}
        />
        <FAB
          icon={<Feather name="plus" size={24} color="white" />}
          visible={true}
          placement="right"
          color="#1E3BA1"
          style={{ marginRight: 20, right: 20, bottom: 20 }}
          onPress={handleOneNewItem}
        />
      </BodyContainer>
    </Container>
  );
};

export default Home;
