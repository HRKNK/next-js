"use client"

// Зарезервированное имя заглушки "Ошибки компонента"
// Оборачивает компонент в ErrorBoundaries
// Error - ищет ближайший родительский компонент (ErrorBoundaries), далее уходит выше по папкам

const Error = (
    { 
        error, 
        reset, // попытка ререндера компонента (в случае исправления ошибки)
    }: { error: Error, reset: () => void }): JSX.Element => {
    return (
        <div>
            Error: {JSON.stringify(error)}
            <button type="button" onClick={reset}>Repeat</button>
        </div>
    );
};

export default Error;