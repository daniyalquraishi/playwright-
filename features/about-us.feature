Feature: I want to see About Us Page

      @run
    Scenario: I want to see About Us Page
        Given I navigate to EIM HomePage
        When I click on "Get Music" link
        And I click on "About Us" link
        Then I should see "About EIM" heading
