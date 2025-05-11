contract MiningContract {
    storage uint256 miningPower;  // Мощность майнинга
    storage uint256 tonBalance;   // Баланс TON
    storage uint256 upgradeLevel; // Уровень апгрейда

    receive() external {
        miningPower += (upgradeLevel + 1); // Учитываем уровень улучшения
        tonBalance += miningPower * 10;    // Начисление TON с бонусом
    }

    external fun upgradeMachine(uint256 amount) {
        require(amount > 0, "Нельзя улучшить на 0!");
        upgradeLevel += amount;
    }

    external fun getBalance() returns (uint256) {
        return tonBalance;
    }
}
