const SMOOTH_LEGAL_BASIC = [
    'Name Search',
    'Priority Mail (US & Global)',
    'Certificate of Formation',
    'Registered Agent service until 2020',
    'State Filing Fee'
]

const SMOOTH_LEGAL_COMPLETE_ADD = [
    'Professionally-Prepared 20 page LLC Operating Agreement - Ready for Signature',
    'IRS and Corporate forms'
]

const SMOOTH_LEGAL_PREMUIM_ADD = [
    '1 - Business Day Turnaround',
    'Email Document Delivery'
]

let SMOOTH_LEGAL_PACKAGE_CONSTANTS = [
    {
        title: 'Basic',
        items: [
            ...SMOOTH_LEGAL_BASIC
        ]
    },
    {
        title: 'Complete',
        items: [
            ...SMOOTH_LEGAL_BASIC,
            ...SMOOTH_LEGAL_COMPLETE_ADD
        ]
    },
    {
        title: 'Premium',
        items: [
            ...SMOOTH_LEGAL_BASIC,
            ...SMOOTH_LEGAL_COMPLETE_ADD,
            ...SMOOTH_LEGAL_PREMUIM_ADD
        ]
    }
]

module.exports = {
    SMOOTH_LEGAL_PACKAGE_CONSTANTS
}