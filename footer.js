import React, { Component } from 'react';
import {
    View,
  } from 'react-native';
  import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class FooterTabsBadgeExample extends Component {
    render() {
      return (
          <Footer>
            <FooterTab>
              <Button badge vertical>
                <Badge><Text>2</Text></Badge>
                <Icon name="calendar" />
                <Text>Calendar</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Mypage</Text>
              </Button>
              <Button active badge vertical>
                <Badge ><Text>2</Text></Badge>
                <Icon active name="chatboxes" />
                <Text>Chat</Text>
              </Button>
            </FooterTab>
          </Footer>
      );
    }
  }