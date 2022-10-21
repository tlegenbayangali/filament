const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './packages/actions/resources/**/*.blade.php',
        './packages/app/resources/**/*.blade.php',
        './packages/forms/resources/**/*.blade.php',
        './packages/notifications/resources/**/*.blade.php',
        './packages/support/resources/**/*.blade.php',
        './packages/tables/resources/**/*.blade.php',
        './packages/widgets/resources/**/*.blade.php',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                danger: colors.red,
                primary: colors.blue,
                success: colors.green,
                warning: colors.yellow,
            },
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
